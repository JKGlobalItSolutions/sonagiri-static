import React from 'react'

const Faqpage = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h6 className="text-uppercase text-muted">TO KNOW MORE</h6>
        <h2 className="fw-bold">FREQUENTLY ASKED QUESTIONS</h2>
      </div>

      {/* Membership */}
      <h5 className="mb-3 text-primary">QUESTION REGARDING MEMBERSHIP</h5>
      <div className="accordion mb-5" id="accordionMembership">
        <div className="accordion-item">
          <h2 className="accordion-header" id="m1">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseM1">Can I pay membership only after I get a tenant?</button>
          </h2>
          <div id="collapseM1" className="accordion-collapse collapse show" data-bs-parent="#accordionMembership">
            <div className="accordion-body">Our membership structure is based on the plan selected. Please contact us for options.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="m2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseM2">Can we pay membership monthly?</button>
          </h2>
          <div id="collapseM2" className="accordion-collapse collapse" data-bs-parent="#accordionMembership">
            <div className="accordion-body">Yes, flexible monthly payment is available on select plans.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="m3">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseM3">Group membership plans available?</button>
          </h2>
          <div id="collapseM3" className="accordion-collapse collapse" data-bs-parent="#accordionMembership">
            <div className="accordion-body">Group plans are available — please contact us for more details.</div>
          </div>
        </div>
      </div>

      {/* Tenant Management */}
      <h5 className="mb-3 text-primary">QUESTION REGARDING TENANT MANAGEMENT</h5>
      <div className="accordion mb-5" id="accordionTenant">
        <div className="accordion-item">
          <h2 className="accordion-header" id="t1">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseT1">Can Sonachala plus guarantee rental collection without issues?</button>
          </h2>
          <div id="collapseT1" className="accordion-collapse collapse show" data-bs-parent="#accordionTenant">
            <div className="accordion-body">While we ensure best efforts, rental payments depend on tenant agreements.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="t2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseT2">How do you screen tenants?</button>
          </h2>
          <div id="collapseT2" className="accordion-collapse collapse" data-bs-parent="#accordionTenant">
            <div className="accordion-body">We perform detailed background verification on all tenants.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="t3">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseT3">How do you handle tenant issues?</button>
          </h2>
          <div id="collapseT3" className="accordion-collapse collapse" data-bs-parent="#accordionTenant">
            <div className="accordion-body">Our team works with tenants and owners to resolve issues promptly.</div>
          </div>
        </div>
      </div>

      {/* Renovation & Maintenance */}
      <h5 className="mb-3 text-primary">QUESTION REGARDING RENOVATION AND MAINTENANCE WORKS</h5>
      <div className="accordion mb-5" id="accordionMaintenance">
        <div className="accordion-item">
          <h2 className="accordion-header" id="r1">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseR1">What kind of maintenance work do you offer?</button>
          </h2>
          <div id="collapseR1" className="accordion-collapse collapse show" data-bs-parent="#accordionMaintenance">
            <div className="accordion-body">We provide general repairs, electrical, plumbing, painting, carpentry and more.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="r2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseR2">Do you supervise all maintenance work?</button>
          </h2>
          <div id="collapseR2" className="accordion-collapse collapse" data-bs-parent="#accordionMaintenance">
            <div className="accordion-body">Yes, all works are supervised by our team to ensure quality.</div>
          </div>
        </div>
      </div>

      {/* Elderly Care */}
      <h5 className="mb-3 text-primary">QUESTION REGARDING ELDERLY CARE</h5>
      <div className="accordion mb-5" id="accordionElderly">
        <div className="accordion-item">
          <h2 className="accordion-header" id="e1">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseE1">What services are offered for elderly care?</button>
          </h2>
          <div id="collapseE1" className="accordion-collapse collapse show" data-bs-parent="#accordionElderly">
            <div className="accordion-body">Assistance with daily activities, medical checkups, companionship, and more.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="e2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseE2">How do I pay for elderly care services?</button>
          </h2>
          <div id="collapseE2" className="accordion-collapse collapse" data-bs-parent="#accordionElderly">
            <div className="accordion-body">We offer monthly or annual packages for elderly care services.</div>
          </div>
        </div>
      </div>

      {/* More Questions */}
      <h5 className="mb-3 text-primary">MORE QUESTIONS</h5>
      <div className="accordion mb-5" id="accordionMore">
        <div className="accordion-item">
          <h2 className="accordion-header" id="q1">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ1">Can I cancel membership and get a refund?</button>
          </h2>
          <div id="collapseQ1" className="accordion-collapse collapse show" data-bs-parent="#accordionMore">
            <div className="accordion-body">Yes, refunds are subject to our cancellation policy.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="q2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ2">Can NRI customers manage properties remotely?</button>
          </h2>
          <div id="collapseQ2" className="accordion-collapse collapse" data-bs-parent="#accordionMore">
            <div className="accordion-body">Yes, all services are available for remote clients.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="q3">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ3">Do you assist with legal documentation?</button>
          </h2>
          <div id="collapseQ3" className="accordion-collapse collapse" data-bs-parent="#accordionMore">
            <div className="accordion-body">Yes, we assist with rental agreements, registrations, and legal formalities.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqpage
