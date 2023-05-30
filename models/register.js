const { Pool } = require('pg');
const pool = new Pool({
    user: 'kids-hevetts22',
    host: 'db.othdb.de',
    database: 'postgres',
    password: 'kids-hevetts22',
    port: 4444, // default PostgreSQL port
  });
const UserProfile = require('./user.js');

/*const button = document.getElementById('register');
// Attach an event listener to the button
button.addEventListener('click', function() {
    console.log('Button clicked!');
    var username = getUsernameInputField();
    var email = getEmailInputField();
    var password = getPasswordInputField();
    var serverURL = new URL("http://localhost:3000/api/register");
    serverURL.search = new URLSearchParams({username: username, email: email, password: password}).toString();
    const response = fetch(serverURL);
    console.log(`Result: ${response}`);
    // Perform any actions or call functions when the button is clicked
  });
*/

function getUsernameInputField() {
    return document.getElementById("username")
}

function getEmailInputField() {
    return document.getElementById("email")
}

function getPasswordInputField() {
    return document.getElementById("password")
}

// Create a new user profile
const createUserProfile = async (userProfile) => {
    const query = `
      INSERT INTO user_profile (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING id
    `;
    const values = [userProfile.username, userProfile.email, userProfile.password];
    console.log('Executing add user');
    try {
      const result = await pool.query(query, values);
      const createdProfileId = result.rows[0].id;
      console.log(`User profile with ID ${createdProfileId} created successfully.`);
      return createdProfileId;
    } catch (error) {
        console.error('Error creating user profile', error);
      throw new Error('Error creating user profile');
    }
  };

const getUserProfileIdByEmail = async (email) => {
    try {
      const query = 'SELECT * FROM user_profile WHERE email = $1';
      const values = [email];
      console.log(`Executing command ${query}`);
      const result = await pool.query(query, values);
      if (result.rows.length > 0){
        const profileId = result.rows[0].id;
        console.log(`Found User profile with ID ${profileId} by email ${email}`);
        return profileId;
        }
      else {
        console.log(`Not found User profile by email ${email}`);
        return null;
      }
    } catch (error) {
        throw new Error('Error retrieving user profile');
    }
  };

  // Retrieve a user profile by ID
const getUserProfileById = async (profileId) => {
    const query = 'SELECT * FROM user_profiles WHERE id = $1';
    const values = [profileId];
    try {
      const result = await pool.query(query, values);
      const row = result.rows[0];
      if (row) {
        return new UserProfile(row.id, row.username, row.email, row.password);
      }
      return null;
    } catch (error) {
      throw new Error('Error retrieving user profile');
    }
  };

 // Update a user profile
const updateUserProfile = async (userProfile) => {
    const query = `
      UPDATE user_profiles
      SET username = $2, email = $3, password = $4
      WHERE id = $1
    `;
    const values = [userProfile.id, userProfile.username, userProfile.email, userProfile.password];
    try {
      await pool.query(query, values);
    } catch (error) {
      throw new Error('Error updating user profile');
    }
  };
  
  //delete a user profile
  const deleteUserProfile = async (profileId) => {
    try {
      const query = 'DELETE FROM user_profile WHERE id = $1';
      const values = [profileId];
      await pool.query(query, values);
    } catch (error) {
      throw new Error('Error deleting user profile');
    }
  };

const addUser = async (username,email,password) => {
    let userProfile = new UserProfile('0', username, email, password);
    let profileId = await getUserProfileIdByEmail(userProfile.email)
    if (profileId === null) {
        let createdProfileId = await createUserProfile(userProfile);
        userProfile.id = createdProfileId;
    }
    return userProfile;
};

const removeUser = async(username,email,password) => {
    let userProfile = new UserProfile('0000', username, email, password);
    profileId = await getUserProfileIdByEmail(userProfile.email);
    if (profileId !== null) {
        deleteUserProfile(profileId);
    }
    return;
};


module.exports = {
    getUserProfileIdByEmail,
    createUserProfile,
    getUserProfileById,
    updateUserProfile,
    deleteUserProfile,
    addUser,
    removeUser
  };
