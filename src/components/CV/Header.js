import React from 'react'
import { Row, Col } from 'antd'

const Header = ({ header }) => (
  <Row type="flex" justify="space-around" align="middle">
    <Col span={2} className="hide-mobile">
      <a href="/LSBuckler_Resume.pdf" target="LSBuckler_Resume.pdf" className="no-print">
        <img src="/logos/resume.png" height="100" alt="pdf icon" />
      </a>
    </Col>
    <Col span={8} className="text-right">
      <h2 className="text-2xl">{header.name}</h2>
      <h5>{header.position}</h5>
    </Col>
    <Col span={4} className="text-center">
      <a href="/">
        <img
          src={header.img.src}
          alt={header.img.alt}
          width={80}
          className="rounded-full max-w-3/4"
        />
      </a>
    </Col>
    <Col span={10} className="text-lg">
      <div>{header.location}</div>
      <>
        {header.contacts.map(contact => (
          <div key={contact.type}>
            {contact.type}:{' '}
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              {contact.linkName}
            </a>
          </div>
        ))}
      </>
    </Col>
  </Row>
)

export default Header
