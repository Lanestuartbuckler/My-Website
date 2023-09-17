import React from 'react'
import { Layout } from 'antd'
import Header from './Header'
import Sidebar from '../Sidebar'
import TopTech from './TopTech'
import SkillList from './SkillList'
import Experience from './Experience'
import PitchLine from './PitchLine'
import Volunteer from './Volunteer'
import Education from './Education'
import Experiments from './Experiments'
import Recommendations from './Recommendations'
import Footer from './Footer'
import data from './data.json'

const { Content } = Layout
const CV = () => (
  <>
    <Content className="m-5">
      {data.header && <Header header={data.header} />}
      {data.pitchLine && <PitchLine pitchLine={data.pitchLine} />}
      {data.education && <Education education={data.education} />}
      {data.experience && <Experience experience={data.experience} />}
      {data.skills && <SkillList skills={data.skills} />}
      {data.recommendations && <Recommendations recommendations={data.recommendations} />}
      {data.footer && <Footer footer={data.footer} />}
    </Content>
  </>
)

export default CV
