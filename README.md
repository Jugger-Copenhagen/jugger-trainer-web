# jugger-trainer-web

Web port of the Jugger Trainer Android app

to run:
npm run dev

to add signin back in, put this in root.tsx in the nav thing:

            <Link to="/exercises/favorited">
              <IconButton color="inherit" sx={{ mr: 1 }}>
                {pathname === '/exercises/favorited' ? <Favorite /> : <FavoriteBorder />}
              </IconButton>
            </Link>

            {userStore.user === null ? (
              <Link to="/login">
                <Button variant="contained">
                  Sign In <Login sx={{ ml: 0.5 }} />
                </Button>
              </Link>
            ) : (
              <Button variant="contained" onClick={logout}>
                Sign Out <Logout sx={{ ml: 0.5 }} />
              </Button>
            )}
