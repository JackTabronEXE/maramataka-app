import React, { useState } from 'react'
import { addUser } from '../apis/contacts'

function Footer() {
  const [email, setEmail] = useState('')

  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    addUser(email)
    setEmail('')
    setSubscribed(true)
  }

  // useEffect(() => {
  //   const keyDownHandler = (event) => {
  //     console.log('User pressed: ', event.key)

  //     if (event.key === 'Enter') {
  //       event.preventDefault()

  //       // 👇️ call submit function here
  //       handleSubmit()
  //     }
  //   }

  //   document.addEventListener('keydown', keyDownHandler)

  //   return () => {
  //     document.removeEventListener('keydown', keyDownHandler)
  //   }
  // }, [])

  return (
    <>
      <section>
        <footer className="footer">
          <br></br>
          <div>
            <div className="footer-text">
              <h1> ABOUT MARAMAKATA: </h1>
              <p>
                {' '}
                The Maramataka is the Māori lunar calendar and the traditional
                Māori way of observing time by noting the movements of the moon.
                <br></br>From the Maramataka,we can understand the rhythms,
                patterns and energies in our world based on the gravitational
                pull of the moon.<br></br>Each night and each moon phase, was
                given a name and can help us identify the connection between the
                moon and our wellbeing~
              </p>
              <div className="form h1">
                <h1> SIGN-UP FOR UPDATES: </h1>
              </div>
              {subscribed ? (
                <h1 className="thankyou">Thank you for signing up!</h1>
              ) : (
                <form className="form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Your E-mail"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <button className="hidden" type="submit">
                    {'Submit'.toUpperCase()}
                  </button>
                </form>
              )}
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}

export default Footer
