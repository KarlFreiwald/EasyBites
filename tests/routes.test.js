const supertestrequest = require("supertest");
const app = require("../app");
const { Pool } = require('pg');

// setup for to mock pg
jest.mock('pg', () => {
  const mPool = {
    connect: function () {
      return { query: jest.fn() };
    },
    query: jest.fn(),
    end: jest.fn(),
    on: jest.fn(),
  };
  return { Pool: jest.fn(() => mPool) };
});

describe('test for handle relay action', () => {
    let pool;
    // before each test case
    beforeEach(() => {
        pool = new Pool();
    });
    // clean up after each test case done
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("testing if home route exists", () => {
        return supertestrequest(app).get("/").then(res => {
          expect(res.statusCode).toEqual(200);
        });
    });
      
    test("testing if static html content of landing page is returned", () => {
        return supertestrequest(app).get("/").then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.text).toMatch("EasyBites");
        });
    });

    test("testing if login route exists", () => {
        return supertestrequest(app).get("/login").then(res => {
          expect(res.statusCode).toEqual(200);
          expect(res.text).toMatch("Login");
        });
    });

    test("testing if Signup route exists", () => {
        return supertestrequest(app).get("/signup").then(res => {
          expect(res.statusCode).toEqual(200);
          expect(res.text).toMatch("Signup");
        });
    });

    test("testing if About route exists", () => {
        return supertestrequest(app).get("/about").then(res => {
          expect(res.statusCode).toEqual(200);
          expect(res.text).toMatch("About");
        });
    });

    test("testing if Contact route exists", () => {
        return supertestrequest(app).get("/contact").then(res => {
          expect(res.statusCode).toEqual(200);
          expect(res.text).toMatch("Contact");
        });
    });
});
