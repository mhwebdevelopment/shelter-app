import React from 'react';
const Faq = () => {
  return (
    <div className="faq">
    <h1>FAQ's</h1>
    <details>
    <summary>What are the shelter hours?</summary>
    <div className="faq__content">
    <h2>M-F 10a-3p<br></br>
    Sat. 10a-1p<br></br>
    Closed Sunday
    </h2>
    </div>
    </details>
    <details>
    <summary>How much are fees and adoption costs?</summary>
    <div className="faq__content">
    <p>If not fixed the appointment with your Vet for Spay/ Neuter must be scheduled with receipt before the animal leaves</p><br></br>
    <p>Adoption Fee: $50<br></br>*We have no adoption fee for Veterans with proof of service*</p><br></br>
    <p>Pick Up Fees: 1st offense-$25, 2nd-$50, 3rd-$100, 4th-$500, + $15/Day Boarding</p><br></br>
    <p>Quarantine Fees: $20/Day</p><br></br>
    <p>Microchip: $15 per animal</p><br></br>
    <p>Euthanasia Fees: $25 (cremation rates based on weight)</p>
    </div>
    </details>
    <details>
    <summary>How does the application process work?</summary>
    <div className="faq__content">
    <p>All applications must be handled in office</p><br></br>
    <p>We have paper copies on hand or you can download the pdf <a className="inline-link" href="/">here</a> and fill it out ahead of time</p><br></br>
    <p>Next it would need to be printed out and turned into the shelter for it to be looked over</p>
    </div>
    </details>
    <details>
    <summary>How can I help?</summary>
    <div className="faq__content">
    <p>Were always accepting new Volunteers just send an email, call, or come in and see us!</p><br></br>
    <p>Donations of any kind are greatly appreciated, we can accept cash or checks made out to the animal shelter</p><br></br>
    <p>You can also donate anytime with our <a className="inline-link" href="https://gofund.me/9542c083">GoFundMe</a> page</p><br></br>
    </div>
    </details>
    </div>
  )
}
export default Faq