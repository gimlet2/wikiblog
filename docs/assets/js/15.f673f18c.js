(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{404:function(e,t,a){"use strict";a.r(t);var o=a(11),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Today we will talk about "),a("a",{attrs:{href:"https://kafka.apache.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Kafka"),a("OutboundLink")],1),e._v(". As you probably already know, Kafka is “a distributed streaming platform”, so it could be used as Queue, Message Bus, etc.")]),e._v(" "),a("p",[e._v("But this story isn’t about Kafka it self. It is about issues I faced recently developing one Kafka based service. Small application consuming messages from defined topic and validating them according to the schema. Nothing like rocket science. But.\n")]),e._v(" "),a("ol",[a("li",[e._v("Upfront check version of your Kafka server — even minor version difference could break API. Like server version 0.10.0.1 isn’t compatible with client 0.10.1.1. Just pay attention.")]),e._v(" "),a("li",[e._v("Check which compression mechanism is used on your Kafka server. "),a("a",{attrs:{href:"https://www.gnu.org/software/gzip/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GZip"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://google.github.io/snappy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Snappy"),a("OutboundLink")],1),e._v(" are supported. In my case it was Snappy, and you know what? It requires "),a("a",{attrs:{href:"https://www.gnu.org/software/libc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("glibc"),a("OutboundLink")],1),e._v(". And my base docker image was Alpine. And Alpine does not have support of glibc. So, choose the right base image.")]),e._v(" "),a("li",[e._v("If you use Kafka Streams API and want to split one stream into two based on some predicate your could pass this predicate to "),a("code",[e._v("_branch_")]),e._v(" method along with predicate that always returns true — some sort of _everithingElsePredicate(_Predicate { _, _ -> true }).")]),e._v(" "),a("li",[e._v("kafka-console-consumer and kafka-console-producer — your best friends to debug your Kafka app.")]),e._v(" "),a("li",[e._v("If you are going to scale you app to process some topic in parallel way don’t forget to increase number of partitions on that topic. But keep in mind that it is only possible to increase number of partitions but there is no way back.")])]),e._v(" "),a("p",[e._v("That’s all I have in mind to mention.")])])}),[],!1,null,null,null);t.default=r.exports}}]);