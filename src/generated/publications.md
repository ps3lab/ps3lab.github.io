
## 2022

- <div class="psu-pub-title"><strong>FreeWill: Automatically Diagnosing Use-after-free Bugs via Reference Miscounting Detection on Binaries (To Appear)</strong>  </div>

    Liang He, Hong Hu, Purui Su, Yan Cai and Zhenkai Liang

    In *Proceedings of the 31st USENIX Security Symposium (USENIX 2022)*
&nbsp;&nbsp;[:octicons-file-16:](/assets/pp/he:freewill.pdf)&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} 
    
    !!! BibTeX

        ```
        @inproceedings{he:freewill,
        
         address = {Boston, MA},
        
         author = {Liang He and Hong Hu and Purui Su and Yan Cai and Zhenkai Liang},
        
         booktitle = {Proceedings of the 31st USENIX Security Symposium (USENIX 2022)},
        
         month = {August},
        
         title = {{FreeWill: Automatically Diagnosing Use-after-free Bugs via Reference Miscounting Detection on Binaries (To Appear)}},
        
         year = {2022}
        
        }
        
        
        
        
        ```
    

- <div class="psu-pub-title"><strong>Cooper: Testing the Binding Code of Scripting Languages with Cooperative Mutation (To Appear)</strong> [![GitHub stars](https://img.shields.io/github/stars/TCA-ISCAS/Cooper.svg?style=social&label=Star&maxAge=2592000)](https://github.com/TCA-ISCAS/Cooper) </div>

    Peng Xu, Yanhao Wang, Hong Hu and Purui Su

    In *Proceedings of the 29th Annual Network and Distributed System Security Symposium (NDSS 2022)*
&nbsp;&nbsp;[:octicons-link-16:](https://github.com/TCA-ISCAS/Cooper)&nbsp;&nbsp;[:octicons-file-16:](/assets/pp/xu:cooper.pdf)&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} 
    
    !!! BibTeX

        ```
        @inproceedings{xu:cooper,
        
         address = {San Diego, CA},
        
         author = {Peng Xu and Yanhao Wang and Hong Hu and Purui Su},
        
         booktitle = {Proceedings of the 29th Annual Network and Distributed System Security Symposium (NDSS 2022)},
        
         month = {April},
        
         title = {{Cooper: Testing the Binding Code of Scripting Languages with Cooperative Mutation (To Appear)}},
        
         www-url = {https://github.com/TCA-ISCAS/Cooper},
        
         year = {2022}
        
        }
        
        
        
        
        ```
    

- <div class="psu-pub-title"><strong>Who Goes First? Detecting Go Concurrency Bugs via Message Reordering</strong> [![GitHub stars](https://img.shields.io/github/stars/system-pclub/GFuzz.svg?style=social&label=Star&maxAge=2592000)](https://github.com/system-pclub/GFuzz) </div>

    Ziheng Liu*, Shihao Xia*, Yu Liang, Linhai Song and Hong Hu

    In *Proceedings of the 27th International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2022)*
&nbsp;&nbsp;[:octicons-link-16:](https://github.com/system-pclub/GFuzz)&nbsp;&nbsp;[:octicons-file-16:](/assets/pp/liu:gfuzz.pdf)&nbsp;&nbsp;[:material-presentation:](/assets/pp/liu:gfuzz-slides.pdf)&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} &nbsp;&nbsp;[:material-newspaper-variant-outline:](#){.psu-abs-button}

    !!! Abstract

        Go is a young programming language invented to build safe and efficient concurrent programs. It provides goroutines as lightweight threads and channels for inter-goroutine communication. Programmers are encouraged to explicitly pass messages through channels to connect goroutines, with the purpose of reducing the chance of making programming mistakes and introducing concurrency bugs. Go is one of the most beloved programming languages and has already been used to build many critical infrastructure software systems in the data-center environment. However, a recent study shows that channel-related concurrency bugs are still common in Go programs, severely hurting the reliability of Go applications.
        
        This paper presents GFuzz, a dynamic detector that can effectively pinpoint channel-related concurrency bugs by mutating the processing orders of concurrent messages. We build GFuzz in three steps. We first adopt an effective approach to identify concurrent messages and transform a program to process those messages in any given order. We then take a fuzzing approach to generate new processing orders by mutating exercised ones and rely on execution feedback to prioritize orders close to triggering bugs. Finally, we design a runtime sanitizer to capture triggered bugs that are missed by the Go runtime. We evaluate GFuzz on seven popular Go software systems, including Docker, Kubernetes, and gRPC. GFuzz finds 184 previously unknown bugs and reports a negligible number of false positives. Programmers have already confirmed 124 reports as real bugs and fixed 67 of them based on our reporting. A careful inspection of the detected concurrency bugs from gRPC shows the effectiveness of each component of GFuzz and confirms the components’ rationality.
        
        
        
    
    !!! BibTeX

        ```
        @inproceedings{liu:gfuzz,
        
         address = {Lausanne, Switzerland},
        
         author = {Ziheng Liu* and Shihao Xia* and Yu Liang and Linhai Song and Hong Hu},
        
         booktitle = {Proceedings of the 27th International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2022)},
        
         month = {February--March},
        
         title = {{Who Goes First? Detecting Go Concurrency Bugs via Message Reordering}},
        
         www-url = {https://github.com/system-pclub/GFuzz},
        
         year = {2022}
        
        }
        
        
        
        
        ```
    

- <div class="psu-pub-title"><strong>Beyond Bot Detection: Combating Fraudulent Online Survey Takers (To Appear)</strong>  </div>

    Ziyi Zhang, Shuofei Zhu, Jaron Mink, Aiping Xiong, Linhai Song and Gang Wang

    In *Proceedings of the ACM Web Conference 2022 (WWW 2022)*
&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} 
    
    !!! BibTeX

        ```
        @inproceedings{zhang:www,
        
         address = {Lyon, France},
        
         author = {Ziyi Zhang and Shuofei Zhu and Jaron Mink and Aiping Xiong and Linhai Song and Gang Wang},
        
         booktitle = {Proceedings of the ACM Web Conference 2022 (WWW 2022)},
        
         month = {April},
        
         title = {{Beyond Bot Detection: Combating Fraudulent Online Survey Takers (To Appear)}},
        
         year = {2022}
        
        }
        
        
        
        
        ```
    

- <div class="psu-pub-title"><strong>Learning and Programming Challenges of Rust: A Mixed-Methods Study (To Appear)</strong>  </div>

    Shuofei Zhu*, Ziyi Zhang*, Boqin Qin, Aiping Xiong and Linhai Song

    In *Proceedings of the 44th International Conference on Software Engineering (ICSE 2022)*
&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} 
    
    !!! BibTeX

        ```
        @inproceedings{zhu:icse,
        
         address = {Pittsburgh, PA},
        
         author = {Shuofei Zhu* and Ziyi Zhang* and Boqin Qin and Aiping Xiong and Linhai Song},
        
         booktitle = {Proceedings of the 44th International Conference on Software Engineering (ICSE 2022)},
        
         month = {May},
        
         title = {{Learning and Programming Challenges of Rust: A Mixed-Methods Study (To Appear)}},
        
         year = {2022}
        
        }
        
        
        
        
        ```
    
## 2021

- <div class="psu-pub-title"><strong>Identifying Behavior Dispatchers for Malware Analysis</strong> [![GitHub stars](https://img.shields.io/github/stars/kp2bit/bdhunter.svg?style=social&label=Star&maxAge=2592000)](https://github.com/kp2bit/bdhunter) </div>

    Kyuhong Park, Burak Sahin, Yongheng Chen, Jisheng Zhao, Evan Downing, Hong Hu and Wenke Lee

    In *Proceedings of the 16th ACM ASIA Conference on Computer and Communications Security (AsiaCCS 2021)*
&nbsp;&nbsp;[:octicons-link-16:](https://github.com/kp2bit/bdhunter)&nbsp;&nbsp;[:octicons-file-16:](/assets/pp/park:bdhunter.pdf)&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} 
    
    !!! BibTeX

        ```
        @inproceedings{park:bdhunter,
        
         address = {Hong Kong, China},
        
         author = {Kyuhong Park and Burak Sahin and Yongheng Chen and Jisheng Zhao and Evan Downing and Hong Hu and Wenke Lee},
        
         booktitle = {Proceedings of the 16th ACM ASIA Conference on Computer and Communications Security (AsiaCCS 2021)},
        
         month = {June},
        
         title = {{Identifying Behavior Dispatchers for Malware Analysis}},
        
         www-url = {https://github.com/kp2bit/bdhunter},
        
         year = {2021}
        
        }
        
        
        
        
        ```
    

- <div class="psu-pub-title"><strong>Sharing More and Checking Less: Leaveraging Common Input Keywords to Detect Bugs in Embedded Systems</strong> [![GitHub stars](https://img.shields.io/github/stars/NSSL-SJTU/SaTC.svg?style=social&label=Star&maxAge=2592000)](https://github.com/NSSL-SJTU/SaTC) </div>

    Libo Chen, Yanhao Wang, Quanpu Cai, Yunfan Zhan, Hong Hu, Jiaqi Linghu, Qinsheng Hou, Chao Zhang, Haixin Duan and Zhi Xue

    In *Proceedings of the 30th USENIX Security Symposium (USENIX 2021)*
&nbsp;&nbsp;[:octicons-link-16:](https://github.com/NSSL-SJTU/SaTC)&nbsp;&nbsp;[:octicons-file-16:](/assets/pp/chen:satc.pdf)&nbsp;&nbsp;[:material-presentation:](/assets/pp/chen:satc-slides.pdf)&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} 
    
    !!! BibTeX

        ```
        @inproceedings{chen:satc,
        
         address = {Vancouver, B.C., Canada},
        
         author = {Libo Chen and Yanhao Wang and Quanpu Cai and Yunfan Zhan and Hong Hu and Jiaqi Linghu and Qinsheng Hou and Chao Zhang and Haixin Duan and Zhi Xue},
        
         booktitle = {Proceedings of the 30th USENIX Security Symposium (USENIX 2021)},
        
         month = {August},
        
         title = {{Sharing More and Checking Less: Leaveraging Common Input Keywords to Detect Bugs in Embedded Systems}},
        
         www-url = {https://github.com/NSSL-SJTU/SaTC},
        
         year = {2021}
        
        }
        
        
        
        
        ```
    

- <div class="psu-pub-title"><strong>Abusing Hidden Properties to Attack the Node.js Ecosystem</strong> [![GitHub stars](https://img.shields.io/github/stars/xiaofen9/Lynx.svg?style=social&label=Star&maxAge=2592000)](https://github.com/xiaofen9/Lynx) </div>

    Feng Xiao, Jianwei Huang, Yichang Xiong, Guangliang Yang, Hong Hu, Guofei Gu and Wenke Lee

    In *Proceedings of the 30th USENIX Security Symposium (USENIX 2021)*
&nbsp;&nbsp;[:octicons-link-16:](https://github.com/xiaofen9/Lynx)&nbsp;&nbsp;[:octicons-file-16:](/assets/pp/xiao:lynx.pdf)&nbsp;&nbsp;[:material-presentation:](/assets/pp/xiao:lynx-slides.pdf)&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} 
    
    !!! BibTeX

        ```
        @inproceedings{xiao:lynx,
        
         address = {Vancouver, B.C., Canada},
        
         author = {Feng Xiao and Jianwei Huang and Yichang Xiong and Guangliang Yang and Hong Hu and Guofei Gu and Wenke Lee},
        
         booktitle = {Proceedings of the 30th USENIX Security Symposium (USENIX 2021)},
        
         month = {August},
        
         title = {{Abusing Hidden Properties to Attack the Node.js Ecosystem}},
        
         www-url = {https://github.com/xiaofen9/Lynx},
        
         year = {2021}
        
        }
        
        
        
        
        ```
    

- <div class="psu-pub-title"><strong>Preventing Use-After-Free Attacks with Fast Forward Allocation</strong> [![GitHub stars](https://img.shields.io/github/stars/bwickman97/ffmalloc.svg?style=social&label=Star&maxAge=2592000)](https://github.com/bwickman97/ffmalloc) </div>

    Brian Wickman, Hong Hu, Insu Yun, Daehee Jang, JungWon Lim, Sanidhya Kashyap and Taesoo Kim

    In *Proceedings of the 30th USENIX Security Symposium (USENIX 2021)*
&nbsp;&nbsp;[:octicons-link-16:](https://github.com/bwickman97/ffmalloc)&nbsp;&nbsp;[:octicons-file-16:](/assets/pp/wickman:ffmalloc.pdf)&nbsp;&nbsp;[:material-presentation:](/assets/pp/wickman:ffmalloc-slides.pdf)&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} 
    
    !!! BibTeX

        ```
        @inproceedings{wickman:ffmalloc,
        
         address = {Vancouver, B.C., Canada},
        
         author = {Brian Wickman and Hong Hu and Insu Yun and Daehee Jang and JungWon Lim and Sanidhya Kashyap and Taesoo Kim},
        
         booktitle = {Proceedings of the 30th USENIX Security Symposium (USENIX 2021)},
        
         month = {August},
        
         title = {{Preventing Use-After-Free Attacks with Fast Forward Allocation}},
        
         www-url = {https://github.com/bwickman97/ffmalloc},
        
         year = {2021}
        
        }
        
        
        
        
        ```
    

- <div class="psu-pub-title"><strong>One Engine to Fuzz 'em All: Generic Language Processor Testing with Semantic Validation</strong> [![GitHub stars](https://img.shields.io/github/stars/s3team/Polyglot.svg?style=social&label=Star&maxAge=2592000)](https://github.com/s3team/Polyglot) </div>

    Yongheng Chen, Rui Zhong, Hong Hu, Hangfan Zhang, Yupeng Yang, Dinghao Wu and Wenke Lee

    In *Proceedings of the 42nd IEEE Symposium on Security and Privacy (Oakland 2021)*
&nbsp;&nbsp;[:octicons-link-16:](https://github.com/s3team/Polyglot)&nbsp;&nbsp;[:octicons-file-16:](/assets/pp/chen:polyglot.pdf)&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} 
    
    !!! BibTeX

        ```
        @inproceedings{chen:polyglot,
        
         address = {San Francisco, CA},
        
         author = {Yongheng Chen and Rui Zhong and Hong Hu and Hangfan Zhang and Yupeng Yang and Dinghao Wu and Wenke Lee},
        
         booktitle = {Proceedings of the 42nd IEEE Symposium on Security and Privacy (Oakland 2021)},
        
         month = {May},
        
         title = {{One Engine to Fuzz 'em All: Generic Language Processor Testing with Semantic Validation}},
        
         www-url = {https://github.com/s3team/Polyglot},
        
         year = {2021}
        
        }
        
        
        
        
        ```
    

- <div class="psu-pub-title"><strong>WINNIE: Fuzzing Windows Applications with Harness Synthesis and Fast Cloning</strong> [![GitHub stars](https://img.shields.io/github/stars/sslab-gatech/winnie.svg?style=social&label=Star&maxAge=2592000)](https://github.com/sslab-gatech/winnie) </div>

    Jinho Jung, Stephen Tong, Hong Hu, Jungwon Lim, Yonghwi Jin and Taesoo Kim

    In *Proceedings of the 28th Annual Network and Distributed System Security Symposium (NDSS 2021)*
&nbsp;&nbsp;[:octicons-link-16:](https://github.com/sslab-gatech/winnie)&nbsp;&nbsp;[:octicons-file-16:](/assets/pp/jung:winnie.pdf)&nbsp;&nbsp;[:material-presentation:](/assets/pp/jung:winnie-slides.pdf)&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} 
    
    !!! BibTeX

        ```
        @inproceedings{jung:winnie,
        
         address = {Virtual},
        
         author = {Jinho Jung and Stephen Tong and Hong Hu and Jungwon Lim and Yonghwi Jin and Taesoo Kim},
        
         booktitle = {Proceedings of the 28th Annual Network and Distributed System Security Symposium (NDSS 2021)},
        
         month = {February},
        
         title = {{WINNIE: Fuzzing Windows Applications with Harness Synthesis and Fast Cloning}},
        
         www-url = {https://github.com/sslab-gatech/winnie},
        
         year = {2021}
        
        }
        
        
        
        
        ```
    

- <div class="psu-pub-title"><strong>Automatically Detecting and Fixing Concurrency Bugs in Go Software Systems</strong> [![GitHub stars](https://img.shields.io/github/stars/system-pclub/GCatch.svg?style=social&label=Star&maxAge=2592000)](https://github.com/system-pclub/GCatch) </div>

    Ziheng Liu, Shuofei Zhu, Boqin Qin, Hao Chen and Linhai Song

    In *Proceedings of the 26th ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2021)*
&nbsp;&nbsp;[:octicons-link-16:](https://github.com/system-pclub/GCatch)&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} &nbsp;&nbsp;[:material-newspaper-variant-outline:](#){.psu-abs-button}

    !!! Abstract

        Go is a statically typed programming language designed for efficient and reliable concurrent programming. For this purpose, Go provides lightweight goroutines and recommends passing messages using channels as a less error-prone means of thread communication. Go has become increasingly popular in recent years and has been adopted to build many important infrastructure software systems. However, a recent empirical study shows that concurrency bugs, especially those due to misuse of channels, exist widely in Go. These bugs severely hurt the reliability of Go concurrent systems. To fight Go concurrency bugs caused by misuse of channels, this paper proposes a static concurrency bug detection system, GCatch, and an automated concurrency bug fixing system, GFix. After disentangling an input Go program, GCatch models the complex channel operations in Go using a novel constraint system and applies a constraint solver to identify blocking bugs. GFix automatically patches blocking bugs detected by GCatch using Go’s channel-related language features. We apply GCatch and GFix to 21 popular Go applications, including Docker, Kubernetes, and gRPC. In total, GCatch finds 149 previously unknown blocking bugs due to misuse of channels and GFix successfully fixes 124 of them. We have reported all detected bugs and generated patches to developers. So far, developers have fixed 125 blocking misuse-of-channel bugs based on our reporting. Among them, 87 bugs are fixed by applying GFix’s patches directly.
        
    
    !!! BibTeX

        ```
        @inproceedings{liu:gcatch,
        
         address = {Virtual, USA},
        
         author = {Ziheng Liu and Shuofei Zhu and Boqin Qin and Hao Chen and Linhai Song},
        
         booktitle = {Proceedings of the 26th ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2021)},
        
         month = {April},
        
         title = {Automatically Detecting and Fixing Concurrency Bugs in Go Software Systems},
        
         www-url = {https://github.com/system-pclub/GCatch},
        
         year = {2021}
        
        }
        
        
        
        
        ```
    
## 2020

- <div class="psu-pub-title"><strong>Understanding Memory and Thread Safety Practices and Issues in Real-World Rust Programs</strong> [![GitHub stars](https://img.shields.io/github/stars/system-pclub/rust-study.svg?style=social&label=Star&maxAge=2592000)](https://github.com/system-pclub/rust-study) </div>

    Boqin Qin*, Yilun Chen*, Zeming Yu, Linhai Song and Yiying Zhang

    In *Proceedings of the 41st ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI 2020)*
&nbsp;&nbsp;[:octicons-link-16:](https://github.com/system-pclub/rust-study)&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} &nbsp;&nbsp;[:material-newspaper-variant-outline:](#){.psu-abs-button}

    !!! Abstract

        Rust is a young programming language designed for systems software development. It aims to provide safety guarantees like high-level languages and performance efficiency like low-level languages. The core design of Rust is a set of strict safety rules enforced by compile-time checking. To support more low-level controls, Rust allows programmers to bypass these compiler checks to write unsafe code. It is important to understand what safety issues exist in real Rust programs and how Rust safety mechanisms impact programming practices. We performed the first empirical study of Rust by close, manual inspection of 850 unsafe code usages and 170 bugs in five open-source Rust projects, five widely-used Rust libraries, two online security databases, and the Rust standard library. Our study answers three important questions: how and why do programmers write unsafe code, what memory-safety issues real Rust programs have, and what concurrency bugs Rust programmers make. Our study reveals interesting real-world Rust program behaviors and new issues Rust programmers make. Based on our study results, we propose several directions of building Rust bug detectors and built two static bug detectors, both of which revealed previously unknown bugs.
        
    
    !!! BibTeX

        ```
        @inproceedings{qin:rust-study,
        
         address = {London, UK},
        
         author = {Boqin Qin* and Yilun Chen* and Zeming Yu and Linhai Song and Yiying Zhang},
        
         booktitle = {Proceedings of the 41st ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI 2020)},
        
         month = {June},
        
         title = {Understanding Memory and Thread Safety Practices and Issues in Real-World Rust Programs},
        
         www-url = {https://github.com/system-pclub/rust-study},
        
         year = {2020}
        
        }
        
        
        
        
        ```
    

- <div class="psu-pub-title"><strong>Measuring and Modeling the Label Dynamics of Online Anti-Malware Engines</strong>  </div>

    Shuofei Zhu, Jianjun Shi, Limin Yang, Boqin Qin, Ziyi Zhang, Linhai Song and Gang Wang

    In *Proceedings of the 29th USENIX Conference on Security Symposium (USENIX 2020)*
&nbsp;&nbsp;[:octicons-link-16:](https://sfzhu93.github.io/projects/vt/index.html)&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} &nbsp;&nbsp;[:material-newspaper-variant-outline:](#){.psu-abs-button}

    !!! Abstract

        VirusTotal provides malware labels from a large set of anti-malware engines, and is heavily used by researchers for malware annotation and system evaluation. Since different engines often disagree with each other, researchers have used various methods to aggregate their labels. In this paper, we take a data-driven approach to categorize, reason, and validate common labeling methods used by researchers. We first survey 115 academic papers that use VirusTotal, and identify common methodologies. Then we collect the daily snapshots of VirusTotal labels for more than 14,000 files (including a subset of manually verified ground-truth) from 65 VirusTotal engines over a year. Our analysis validates the benefits of threshold-based label aggregation in stabilizing files' labels, and also points out the impact of poorly-chosen thresholds. We show that hand-picked "trusted" engines do not always perform well, and certain groups of engines are strongly correlated and should not be treated independently. Finally, we empirically show certain engines fail to perform in-depth analysis on submitted files and can easily produce false positives. Based on our findings, we offer suggestions for future usage of VirusTotal for data annotation.
        
    
    !!! BibTeX

        ```
        @inproceedings{zhu:usenix,
        
         address = {Virtual, USA},
        
         author = {Shuofei Zhu and Jianjun Shi and Limin Yang and Boqin Qin and Ziyi Zhang and Linhai Song and Gang Wang},
        
         booktitle = {Proceedings of the 29th USENIX Conference on Security Symposium (USENIX 2020)},
        
         month = {August},
        
         title = {Measuring and Modeling the Label Dynamics of Online Anti-Malware Engines},
        
         www-url = {https://sfzhu93.github.io/projects/vt/index.html},
        
         year = {2020}
        
        }
        
        
        
        
        ```
    
## 2019

- <div class="psu-pub-title"><strong>Opening the Blackbox of VirusTotal: Analyzing Online Phishing Scan Engines</strong>  </div>

    Peng Peng, Limin Yang, Linhai Song and Gang Wang

    In *Proceedings of the 2019 Internet Measurement Conference (IMC 2019)*
&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} &nbsp;&nbsp;[:material-newspaper-variant-outline:](#){.psu-abs-button}

    !!! Abstract

        Online scan engines such as VirusTotal are heavily used by researchers to label malicious URLs and files. Unfortunately, it is not well understood how the labels are generated and how reliable the scanning results are. In this paper, we focus on VirusTotal and its 68 third-party vendors to examine their labeling process on phishing URLs. We perform a series of measurements by setting up our own phishing websites (mimicking PayPal and IRS) and submitting the URLs for scanning. By analyzing the incoming network traffic and the dynamic label changes at VirusTotal, we reveal new insights into how VirusTotal works and the quality of their labels. Among other things, we show that vendors have trouble flagging all phishing sites, and even the best vendors missed 30% of our phishing sites. In addition, the scanning results are not immediately updated to VirusTotal after the scanning, and there are inconsistent results between VirusTotal scan and some vendors' own scanners. Our results reveal the need for developing more rigorous methodologies to assess and make use of the labels obtained from VirusTotal.
        
    
    !!! BibTeX

        ```
        @inproceedings{peng:imc,
        
         address = {Amsterdam, Netherlands},
        
         author = {Peng Peng and Limin Yang and Linhai Song and Gang Wang},
        
         booktitle = {Proceedings of the 2019 Internet Measurement Conference (IMC 2019)},
        
         month = {October},
        
         title = {Opening the Blackbox of VirusTotal: Analyzing Online Phishing Scan Engines},
        
         year = {2019}
        
        }
        
        
        
        
        ```
    

- <div class="psu-pub-title"><strong>Understanding Real-World Concurrency Bugs in Go</strong>  </div>

    Tengfei Tu, Xiaoyu Liu, Linhai Song and Yiying Zhang

    In *Proceedings of the 24th International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2019)*
&nbsp;&nbsp;[:octicons-cross-reference-16:](#){.psu-ref-button} &nbsp;&nbsp;[:material-newspaper-variant-outline:](#){.psu-abs-button}

    !!! Abstract

        Go is a statically-typed programming language that aims to provide a simple, efficient, and safe way to build multi-threaded software. Since its creation in 2009, Go has matured and gained significant adoption in production and open-source software. Go advocates for the usage of message passing as the means of inter-thread communication and provides several new concurrency mechanisms and libraries to ease multi-threading programming. It is important to understand the implication of these new proposals and the comparison of message passing and shared memory synchronization in terms of program errors, or bugs. Unfortunately, as far as we know, there has been no study on Go's concurrency bugs. In this paper, we perform the first systematic study on concurrency bugs in real Go programs. We studied six popular Go software including Docker, Kubernetes, and gRPC. We analyzed 171 concurrency bugs in total, with more than half of them caused by non-traditional, Go-specific problems. Apart from root causes of these bugs, we also studied their fixes, performed experiments to reproduce them, and evaluated them with two publicly-available Go bug detectors. Overall, our study provides a better understanding on Go's concurrency models and can guide future researchers and practitioners in writing better, more reliable Go software and in developing debugging and diagnosis tools for Go.
        
    
    !!! BibTeX

        ```
        @inproceedings{tu:go-study,
        
         address = {Providence, RI},
        
         author = {Tengfei Tu and Xiaoyu Liu and Linhai Song and Yiying Zhang},
        
         booktitle = {Proceedings of the 24th International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2019)},
        
         month = {April},
        
         title = {Understanding Real-World Concurrency Bugs in Go},
        
         year = {2019}
        
        }
        
        
        
        
        ```
    