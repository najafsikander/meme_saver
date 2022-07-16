import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import Layout from "../components/layout";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Layout layoutMode={0}>
        <main className={styles.fullPage}>
          <div className={styles.custCard}>
            <div className={`card col-md-6 offset-md-3`}>
              <div className="card-body">
                <h1 className="card-title">Meme Vault</h1>
                <h4 className="card-subtitle mb-2 text-muted">
                  Place where you can store and share your favorite memes
                </h4>

                <p>Lets get you started</p>

                <div className="container">
                  <div className="row">
                    <div className="col-md-6 offset-md-3">
                      <Link href="/sign-in">
                        <a>
                          <button
                            type="button"
                            className="btn btn-primary"
                            id={styles.signIn}
                          >
                            Sign In
                          </button>
                        </a>
                      </Link>

                      <Link href="/sign-up">
                        <a>
                          <button type="button" className="btn btn-secondary">
                            Sign Up
                          </button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
