$("#sddredpns3").click(function(){
    $(".grid-content").html(`

<h1>SIMULASI DROPTAIL DAN RANDOM EARLY DETECTION PADA NETWORK SIMULATOR 3<h1>
<h2><a href="http://www.mediafire.com/folder/6zo95r24e50wc/NS3">http://www.mediafire.com/folder/6zo95r24e50wc/NS3</a></h2>


<h2>Nama: Fajar Purnama <br />

NIM: 1004405045 <br />

Jurusan: Teknik Elektro <br />

Mata Kuliah: Kualitas Layanan dan Kehandalan Sistel <br />

Fakultas Teknik Universitas Udayana </h2>

<h2>BAB I PENDAHULUAN </h2>

<h3>1.1 Latar Belakang</h3>

<p>
Teori antrean merupakan suatu teori dimana pelanggan harus antri untuk mendapatkan pelayanan dari pelayan. Teori antrean bertujuan untuk mengatur tingkat pelayanan dengan data kedatangan pelanggan. Pada teori antrean terdapat cara untuk mengatur tingkat pelayanan yang tepat, tingkat kesibukkan pelayan, berapa lama suatu pelanggan harus menunggu, berapa jumlah pelanggan dalam antrean, berapa besar ruang tunggu yang harus disiapkan, dan lain-lain.</p> <br />

<p>Di dunia nyata suatu pelayanan tidak terlepas dari antrean, termasuk pelayanan pada jaringan data. Untuk mensimulasikan antrean pada jaringan data telah tersedia banyak perangkat lunak seperti Network Simulator, yang kini telah berkembang menjadi NS3 (Network Simulator 3).</p> <br />

<p>Pada NS3 antrean dapat diatur secara manual namun telah tersedia 2 jenis antrean yang sudah jadi yaitu Droptail dan RED(Random Early Detection)Queue. Sudah tersedia contoh yang dibuat oleh Marcos Talau dan Duy Nguyen.</p> <br />

<p>Pada makalah ini akan disimulasikan REDQueue pada jaringan komputer point-to-point sederhana.</p>

<h3>1.2	Rumusan Masalah </h3>

<p>Bagaimana simulasi REDQueue yang telah disediakan oleh Marcos Talau dan Duy Nguyen? </p>

<h3>1.3	Tujuan </h3>

<p>Untuk mensimulasikan REDQueue oleh Marcos Talau dan Duy Nguyen pada NS3.</p>

<h3> 1.4 Manfaat </h3>

<ol>
<li> 
Mendapatkan gambaran simulasi antrean REDQueue. </li>
<li>Dapat menerapkan simulasi antrean sendiri.</li>
</ol>

<h3>1.5 Ruang Lingkup dan Batasan</h3>

<ol>
<li> Menggunakan jaringan Ipv4 point-to-point. </li>
<li> Pada jaringan &lt; 10Mbps. </li>
<li> Menggunakan simulator NS3 versi Linux. </li>
<li> Menggunakan Droptail dan REDQueue yang disediakan pada NS3. </li>
</ol>

<h2>BAB II TINJAUAN PUSTAKA</h2>

<h3>2.1 Antrean </h3>

<p>Model antrean sederhana dapat dilihat seperti berikut: </p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/732abe69-fe11-4768-9f6c-980e346a0223-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 2.1 Model antrean sederhana </figcaption>
</figure>



<p>Pada gambar 2.1 terlihat kedatangan pelanggan λ dalam satuan erlang, pada sistem disediakan ruang tunggu maksimum w dengan masing-masing pelanggan ada waktu tunggu Tw, dan ada pelayan s dengan waktu pelayanan Ts dimana tingkat kesibukannya adalah p. Tr merupakan waktu rata – rata suatu pelanggan menunggu di sistem, dan r merupakan jumlah pelanggan dalam sistem. Untuk perhitungan dapat dilihat gambar berikut (Stalling, 1998): </p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/aa6fb543-36ca-4b99-8e6d-652dd0411913-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 2.2 Perhitungan antrean dasar</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/3621da80-faf0-4422-999b-f7a84d959a44-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 2.3 Perhitungan 3 jenis antrean</figcaption>
</figure>



<h3>2.2 Droptail dan RED(Random Early Detection)Queue</h3>

<p>Droptail menggunakan antrean dasar yaitu FIFO (first in first out) dengan membuang paket bila buffer pada node penuh, sedangkan Random Early Detection memerintahkan suatu koneksi untuk mengurangi kecepatan sebelum buffer penuh. Tujuan RED adalah congestion avoidance lebih untuk menghindari kongesti dari pada mengatasi, global synchronization avoidance, Avoidance of bias against bursty traffic, dan bound on average queue length untuk mempertahankan rata-rata panjang antrean maka mempertahankan rata-rata delay.</p><br />

<p>Secara umum algoritma dari RED adalah rata-rata panjang antrean lebih kecil dari batasan minimal yang ditentukan, maka paket akan antre. Bila rata-rata panjang antrean diantara batasan minimal dan batasan maksimal maka akan ada probabiltas pembuangan paket. Bila diatas maksimal maka akan terjadi pembuangan paket (Stallings, 1998).</p>

<h3>2.3 Network Simulator 3</h3>

<p>ns-3 adalah simulator jaringan kejadian diskrit, ditargetkan terutama untuk penelitian dan penggunaan pendidikan. ns-3 adalah perangkat lunak bebas, dilisensikan di bawah lisensi GNU GPLv2, dan publik untuk penelitian, pengembangan, dan penggunaan (ns3-project, 2012).</p>

<h2>BAB III METODE PERCOBAAN </h2>

<h2>3.1 Tempat dan Waktu Percobaan </h2>

<p>Percobaan dilakukan di Rumah pada tanggal 30 Mei 2013.</p>

<h2>3.2 Alat</h2>



<table border="1">
<caption>Tabel 3.1 Alat yang digunakan</caption>
<tr>
<th>NO</th>
<th>Alat</th>
<th>Spesifikasi</th>
</tr>

<tr>
<td>1</td>
<td>Laptop ACER</td>
<td>
Intel® Pentium® dual – core processor T4200 (2.0 GHz, 800 MHz FSB, 1 MB L2 cache)
Mobile Intel® Graphics Media Accelerator 4500MHD
1GB DDR2
128 WXGA Acer CrystalBriteTM LCD
250GB HDD
Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet Controller
Atheros Communications Inc. AR928X Wireless Network Adapter
Operating System Linux Backtrack 5 R3
</td> 
</tr>

<tr>
<td>2</td>
<td>Software</td>
<td>NS3 (Network Simulator 3)</td>
</tr>
</table>
<h3>3.3 Program</h3>
<p>
Program pertama mengambil contoh dari John Abraham yaitu perbandingan Droptail dengan RED. Program kedua adalah tentang REDQueue dari Marcos Talau dan Duy Nguyen.
</p>

<pre><code> 
/* -*- Mode:C++; c-file-style:&rdquo;gnu&rdquo;; indent-tabs-mode:nil; -*- */ /*
 * This program is free software; you can redistribute it and/or modify * it under the terms of the GNU General Public License version 2 as * published by the Free Software Foundation;
 *
 * This program is distributed in the hope that it will be useful, * but WITHOUT ANY WARRANTY; without even the implied warranty of * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License * along with this program; if not, write to the Free Software * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA
 *
 * Author: John Abraham &lt;john.abraham@gatech.edu&gt;
 *
 */
 #include &ldquo;ns3/core-module.h&rdquo; #include &ldquo;ns3/network-module.h&rdquo; #include &ldquo;ns3/internet-module.h&rdquo; #include &ldquo;ns3/point-to-point-module.h&rdquo; #include &ldquo;ns3/applications-module.h&rdquo; #include &ldquo;ns3/point-to-point-layout-module.h&rdquo;
 #include &lt;iostream&gt; #include &lt;iomanip&gt; #include &lt;map&gt;
 using namespace ns3;
 int main (int argc, char *argv[])
 {
 uint32_t nLeaf = 5; uint32_t maxPackets = 100; uint32_t modeBytes = 0; double minTh = 50; double maxTh = 80; uint32_t pktSize = 512; std::string appDataRate = &ldquo;10Mbps&rdquo;; std::string queueType = &ldquo;DropTail&rdquo;; uint16_t port = 5001; std::string bottleNeckLinkBw = &ldquo;1Mbps&rdquo;; std::string bottleNeckLinkDelay = &ldquo;50ms&rdquo;;
 CommandLine cmd;
 cmd.AddValue (&ldquo;nLeaf&rdquo;, &ldquo;Number of left and right side leaf nodes&rdquo;, nLeaf); cmd.AddValue (&ldquo;maxPackets&rdquo;,&rdquo;Max Packets allowed in the queue&rdquo;, maxPackets); cmd.AddValue (&ldquo;queueType&rdquo;, &ldquo;Set Queue type to DropTail or RED&rdquo;, queueType); cmd.AddValue (&ldquo;appPktSize&rdquo;, &ldquo;Set OnOff App Packet Size&rdquo;, pktSize); cmd.AddValue (&ldquo;appDataRate&rdquo;, &ldquo;Set OnOff App DataRate&rdquo;, appDataRate); cmd.AddValue (&ldquo;modeBytes&rdquo;, &ldquo;Set Queue mode to Packets &lt;0&gt; or bytes &lt;1&gt;&rdquo;, modeBytes); cmd.AddValue (&ldquo;redMinTh&rdquo;, &ldquo;RED queue minimum threshold&rdquo;, minTh); cmd.AddValue (&ldquo;redMaxTh&rdquo;, &ldquo;RED queue maximum threshold&rdquo;, maxTh); cmd.Parse (argc,argv);
 if ((queueType != &ldquo;RED&rdquo;) &amp;&amp; (queueType != &ldquo;DropTail&rdquo;)) { NS_ABORT_MSG (&ldquo;Invalid queue type: Use &ndash;queueType=RED or &ndash;queueType=DropTail&rdquo;); }
 Config::SetDefault (&ldquo;ns3::OnOffApplication::PacketSize&rdquo;, UintegerValue (pktSize)); Config::SetDefault (&ldquo;ns3::OnOffApplication::DataRate&rdquo;, StringValue (appDataRate));
 if (!modeBytes) { Config::SetDefault (&ldquo;ns3::DropTailQueue::Mode&rdquo;, StringValue (&ldquo;QUEUE_MODE_PACKETS&rdquo;)); Config::SetDefault (&ldquo;ns3::DropTailQueue::MaxPackets&rdquo;, UintegerValue (maxPackets)); Config::SetDefault (&ldquo;ns3::RedQueue::Mode&rdquo;, StringValue (&ldquo;QUEUE_MODE_PACKETS&rdquo;)); Config::SetDefault (&ldquo;ns3::RedQueue::QueueLimit&rdquo;, UintegerValue (maxPackets)); } else { Config::SetDefault (&ldquo;ns3::DropTailQueue::Mode&rdquo;, StringValue (&ldquo;QUEUE_MODE_BYTES&rdquo;)); Config::SetDefault (&ldquo;ns3::DropTailQueue::MaxBytes&rdquo;, UintegerValue (maxPackets * pktSize)); Config::SetDefault (&ldquo;ns3::RedQueue::Mode&rdquo;, StringValue (&ldquo;QUEUE_MODE_BYTES&rdquo;)); Config::SetDefault (&ldquo;ns3::RedQueue::QueueLimit&rdquo;, UintegerValue (maxPackets * pktSize)); minTh *= pktSize; maxTh *= pktSize; }
 // Create the point-to-point link helpers
 PointToPointHelper bottleNeckLink; bottleNeckLink.SetDeviceAttribute (&ldquo;DataRate&rdquo;, StringValue (bottleNeckLinkBw)); bottleNeckLink.SetChannelAttribute (&ldquo;Delay&rdquo;, StringValue (bottleNeckLinkDelay));
 if (queueType == &ldquo;RED&rdquo;) { bottleNeckLink.SetQueue (&ldquo;ns3::RedQueue&rdquo;, &ldquo;MinTh&rdquo;, DoubleValue (minTh), &ldquo;MaxTh&rdquo;, DoubleValue (maxTh), &ldquo;LinkBandwidth&rdquo;, StringValue (bottleNeckLinkBw), &ldquo;LinkDelay&rdquo;, StringValue (bottleNeckLinkDelay)); }
 PointToPointHelper pointToPointLeaf; pointToPointLeaf.SetDeviceAttribute (&ldquo;DataRate&rdquo;, StringValue (&ldquo;10Mbps&rdquo;)); pointToPointLeaf.SetChannelAttribute (&ldquo;Delay&rdquo;, StringValue (&ldquo;1ms&rdquo;));
 PointToPointDumbbellHelper d (nLeaf, pointToPointLeaf, nLeaf, pointToPointLeaf, bottleNeckLink);
 // Install Stack InternetStackHelper stack; d.InstallStack (stack);
 // Assign IP Addresses
 d.AssignIpv4Addresses (Ipv4AddressHelper (&ldquo;10.1.1.0&rdquo;, &ldquo;255.255.255.0&rdquo;), Ipv4AddressHelper (&ldquo;10.2.1.0&rdquo;, &ldquo;255.255.255.0&rdquo;), Ipv4AddressHelper (&ldquo;10.3.1.0&rdquo;, &ldquo;255.255.255.0&rdquo;));
 // Install on/off app on all right side nodes OnOffHelper clientHelper (&ldquo;ns3::TcpSocketFactory&rdquo;, Address ()); clientHelper.SetAttribute (&ldquo;OnTime&rdquo;, StringValue (&ldquo;ns3::UniformRandomVariable[Min=0.,Max=1.]&rdquo;)); clientHelper.SetAttribute (&ldquo;OffTime&rdquo;, StringValue (&ldquo;ns3::UniformRandomVariable[Min=0.,Max=1.]&rdquo;)); Address sinkLocalAddress (InetSocketAddress (Ipv4Address::GetAny (), port)); PacketSinkHelper packetSinkHelper (&ldquo;ns3::TcpSocketFactory&rdquo;, sinkLocalAddress);
 ApplicationContainer sinkApps;
 for (uint32_t i = 0; i &lt; d.LeftCount (); ++i) { sinkApps.Add (packetSinkHelper.Install (d.GetLeft (i))); }
 sinkApps.Start (Seconds (0.0)); sinkApps.Stop (Seconds (30.0));
 ApplicationContainer clientApps;
 for (uint32_t i = 0; i &lt; d.RightCount (); ++i) { // Create an on/off app sending packets to the left side AddressValue remoteAddress (InetSocketAddress (d.GetLeftIpv4Address (i), port)); clientHelper.SetAttribute (&ldquo;Remote&rdquo;, remoteAddress); clientApps.Add (clientHelper.Install (d.GetRight (i))); }
 clientApps.Start (Seconds (1.0)); // Start 1 second after sink clientApps.Stop (Seconds (15.0)); // Stop before the sink
 Ipv4GlobalRoutingHelper::PopulateRoutingTables ();
 std::cout &lt;&lt; &ldquo;Running the simulation&rdquo; &lt;&lt; std::endl;
 Simulator::Run ();
 uint32_t totalRxBytesCounter = 0; for (uint32_t i = 0; i &lt; sinkApps.GetN (); i++) { Ptr &lt;Application&gt; app = sinkApps.Get (i); Ptr &lt;PacketSink&gt; pktSink = DynamicCast &lt;PacketSink&gt; (app); totalRxBytesCounter += pktSink-&gt;GetTotalRx (); }
 NS_LOG_UNCOND (&ldquo;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;-nQueue Type:&rdquo;
 &lt;&lt; queueType &lt;&lt; &ldquo;nGoodput Bytes/sec:&rdquo; &lt;&lt; totalRxBytesCounter/Simulator::Now ().GetSeconds ()); NS_LOG_UNCOND (&ldquo;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;-&ldquo;);
 std::cout &lt;&lt; &ldquo;Destroying the simulation&rdquo; &lt;&lt; std::endl; Simulator::Destroy (); return 0; }
 Always use the online HTML editor to compose perfect articles for your website! 
 </code></pre>


<p>Kode 3.1 Program Droptail_vs_RED.cc</p>

<pre>
<code>
 /* -*- Mode:C++; c-file-style:&rdquo;gnu&rdquo;; indent-tabs-mode:nil; -*- */ /* * This program is free software; you can redistribute it and/or modify * it under the terms of the GNU General Public License version 2 as * published by the Free Software Foundation; * * This program is distributed in the hope that it will be useful, * but WITHOUT ANY WARRANTY; without even the implied warranty of * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the * GNU General Public License for more details. * * You should have received a copy of the GNU General Public License * along with this program; if not, write to the Free Software * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA * * Authors: Marcos Talau &lt;talau@users.sourceforge.net&gt; * Duy Nguyen &lt;duy@soe.ucsc.edu&gt; * */
 #include &ldquo;ns3/core-module.h&rdquo; #include &ldquo;ns3/network-module.h&rdquo; #include &ldquo;ns3/internet-module.h&rdquo; #include &ldquo;ns3/flow-monitor-helper.h&rdquo; #include &ldquo;ns3/point-to-point-module.h&rdquo; #include &ldquo;ns3/applications-module.h&rdquo;
 using namespace ns3; NS_LOG_COMPONENT_DEFINE (&ldquo;RedTests&rdquo;); uint32_t checkTimes; double avgQueueSize;
 // The times double global_start_time; double global_stop_time; double sink_start_time; double sink_stop_time; double client_start_time; double client_stop_time;
 NodeContainer n0n2; NodeContainer n1n2; NodeContainer n2n3; NodeContainer n3n4; NodeContainer n3n5;
 Ipv4InterfaceContainer i0i2; Ipv4InterfaceContainer i1i2; Ipv4InterfaceContainer i2i3; Ipv4InterfaceContainer i3i4; Ipv4InterfaceContainer i3i5;
 std::stringstream filePlotQueue; std::stringstream filePlotQueueAvg;
 void
 CheckQueueSize (Ptr&lt;Queue&gt; queue) { uint32_t qSize = StaticCast&lt;RedQueue&gt; (queue)-&gt;GetQueueSize ();
 avgQueueSize += qSize; checkTimes++;
 // check queue size every 1/100 of a second
 Simulator::Schedule (Seconds (0.01), &amp;CheckQueueSize, queue); std::ofstream fPlotQueue (filePlotQueue.str ().c_str (), std::ios::out|std::ios::app); fPlotQueue &lt;&lt; Simulator::Now ().GetSeconds () &lt;&lt; &rdquo; &rdquo; &lt;&lt; qSize &lt;&lt; std::endl; fPlotQueue.close ();
 std::ofstream fPlotQueueAvg (filePlotQueueAvg.str ().c_str (), std::ios::out|std::ios::app); fPlotQueueAvg &lt;&lt; Simulator::Now ().GetSeconds () &lt;&lt; &rdquo; &rdquo; &lt;&lt; avgQueueSize / checkTimes &lt;&lt; std::endl; fPlotQueueAvg.close (); }
 void BuildAppsTest (uint32_t test) { if ( (test == 1) || (test == 3) ) { // SINK is in the right side uint16_t port = 50000; Address sinkLocalAddress (InetSocketAddress (Ipv4Address::GetAny (), port)); PacketSinkHelper sinkHelper (&ldquo;ns3::TcpSocketFactory&rdquo;, sinkLocalAddress); ApplicationContainer sinkApp = sinkHelper.Install (n3n4.Get (1)); sinkApp.Start (Seconds (sink_start_time)); sinkApp.Stop (Seconds (sink_stop_time));
 // Connection one
 // Clients are in left side
 /* * Create the OnOff applications to send TCP to the server * onoffhelper is a client that send data to TCP destination */
 OnOffHelper clientHelper1 (&ldquo;ns3::TcpSocketFactory&rdquo;, Address ()); clientHelper1.SetAttribute (&ldquo;OnTime&rdquo;, StringValue (&ldquo;ns3::ConstantRandomVariable[Constant=1]&rdquo;)); clientHelper1.SetAttribute (&ldquo;OffTime&rdquo;, StringValue (&ldquo;ns3::ConstantRandomVariable[Constant=0]&rdquo;)); clientHelper1.SetAttribute (&ldquo;DataRate&rdquo;, DataRateValue (DataRate (&ldquo;10Mb/s&rdquo;))); clientHelper1.SetAttribute (&ldquo;PacketSize&rdquo;, UintegerValue (1000));
 ApplicationContainer clientApps1; AddressValue remoteAddress (InetSocketAddress (i3i4.GetAddress (1), port)); clientHelper1.SetAttribute (&ldquo;Remote&rdquo;, remoteAddress); clientApps1.Add (clientHelper1.Install (n0n2.Get (0))); clientApps1.Start (Seconds (client_start_time)); clientApps1.Stop (Seconds (client_stop_time));
 // Connection two
 OnOffHelper clientHelper2 (&ldquo;ns3::TcpSocketFactory&rdquo;, Address ()); clientHelper2.SetAttribute (&ldquo;OnTime&rdquo;, StringValue (&ldquo;ns3::ConstantRandomVariable[Constant=1]&rdquo;)); clientHelper2.SetAttribute (&ldquo;OffTime&rdquo;, StringValue (&ldquo;ns3::ConstantRandomVariable[Constant=0]&rdquo;)); clientHelper2.SetAttribute (&ldquo;DataRate&rdquo;, DataRateValue (DataRate (&ldquo;10Mb/s&rdquo;))); clientHelper2.SetAttribute (&ldquo;PacketSize&rdquo;, UintegerValue (1000));
 ApplicationContainer clientApps2; clientHelper2.SetAttribute (&ldquo;Remote&rdquo;, remoteAddress); clientApps2.Add (clientHelper2.Install (n1n2.Get (0))); clientApps2.Start (Seconds (3.0)); clientApps2.Stop (Seconds (client_stop_time)); } else // 4 or 5 { // SINKs // #1 uint16_t port1 = 50001; Address sinkLocalAddress1 (InetSocketAddress (Ipv4Address::GetAny (), port1)); PacketSinkHelper sinkHelper1 (&ldquo;ns3::TcpSocketFactory&rdquo;, sinkLocalAddress1); ApplicationContainer sinkApp1 = sinkHelper1.Install (n3n4.Get (1)); sinkApp1.Start (Seconds (sink_start_time)); sinkApp1.Stop (Seconds (sink_stop_time)); // #2 uint16_t port2 = 50002; Address sinkLocalAddress2 (InetSocketAddress (Ipv4Address::GetAny (), port2)); PacketSinkHelper sinkHelper2 (&ldquo;ns3::TcpSocketFactory&rdquo;, sinkLocalAddress2); ApplicationContainer sinkApp2 = sinkHelper2.Install (n3n5.Get (1)); sinkApp2.Start (Seconds (sink_start_time)); sinkApp2.Stop (Seconds (sink_stop_time)); // #3 uint16_t port3 = 50003; Address sinkLocalAddress3 (InetSocketAddress (Ipv4Address::GetAny (), port3)); PacketSinkHelper sinkHelper3 (&ldquo;ns3::TcpSocketFactory&rdquo;, sinkLocalAddress3); ApplicationContainer sinkApp3 = sinkHelper3.Install (n0n2.Get (0)); sinkApp3.Start (Seconds (sink_start_time)); sinkApp3.Stop (Seconds (sink_stop_time)); // #4 uint16_t port4 = 50004; Address sinkLocalAddress4 (InetSocketAddress (Ipv4Address::GetAny (), port4)); PacketSinkHelper sinkHelper4 (&ldquo;ns3::TcpSocketFactory&rdquo;, sinkLocalAddress4); ApplicationContainer sinkApp4 = sinkHelper4.Install (n1n2.Get (0)); sinkApp4.Start (Seconds (sink_start_time)); sinkApp4.Stop (Seconds (sink_stop_time));
 

 // Connection #1 /* * Create the OnOff applications to send TCP to the server * onoffhelper is a client that send data to TCP destination */
 OnOffHelper clientHelper1 (&ldquo;ns3::TcpSocketFactory&rdquo;, Address ()); clientHelper1.SetAttribute (&ldquo;OnTime&rdquo;, StringValue (&ldquo;ns3::ConstantRandomVariable[Constant=1]&rdquo;)); clientHelper1.SetAttribute (&ldquo;OffTime&rdquo;, StringValue (&ldquo;ns3::ConstantRandomVariable[Constant=0]&rdquo;)); clientHelper1.SetAttribute (&ldquo;DataRate&rdquo;, DataRateValue (DataRate (&ldquo;10Mb/s&rdquo;))); clientHelper1.SetAttribute (&ldquo;PacketSize&rdquo;, UintegerValue (1000));
 ApplicationContainer clientApps1; AddressValue remoteAddress1 (InetSocketAddress (i3i4.GetAddress (1), port1)); clientHelper1.SetAttribute (&ldquo;Remote&rdquo;, remoteAddress1); clientApps1.Add (clientHelper1.Install (n0n2.Get (0))); clientApps1.Start (Seconds (client_start_time)); clientApps1.Stop (Seconds (client_stop_time));
 // Connection #2
 OnOffHelper clientHelper2 (&ldquo;ns3::TcpSocketFactory&rdquo;, Address ()); clientHelper2.SetAttribute (&ldquo;OnTime&rdquo;, StringValue (&ldquo;ns3::ConstantRandomVariable[Constant=1]&rdquo;)); clientHelper2.SetAttribute (&ldquo;OffTime&rdquo;, StringValue (&ldquo;ns3::ConstantRandomVariable[Constant=0]&rdquo;)); clientHelper2.SetAttribute (&ldquo;DataRate&rdquo;, DataRateValue (DataRate (&ldquo;10Mb/s&rdquo;))); clientHelper2.SetAttribute (&ldquo;PacketSize&rdquo;, UintegerValue (1000));
 ApplicationContainer clientApps2; AddressValue remoteAddress2 (InetSocketAddress (i3i5.GetAddress (1), port2)); clientHelper2.SetAttribute (&ldquo;Remote&rdquo;, remoteAddress2); clientApps2.Add (clientHelper2.Install (n1n2.Get (0))); clientApps2.Start (Seconds (2.0)); clientApps2.Stop (Seconds (client_stop_time));
 // Connection #3
 OnOffHelper clientHelper3 (&ldquo;ns3::TcpSocketFactory&rdquo;, Address ()); clientHelper3.SetAttribute (&ldquo;OnTime&rdquo;, StringValue (&ldquo;ns3::ConstantRandomVariable[Constant=1]&rdquo;)); clientHelper3.SetAttribute (&ldquo;OffTime&rdquo;, StringValue (&ldquo;ns3::ConstantRandomVariable[Constant=0]&rdquo;)); clientHelper3.SetAttribute (&ldquo;DataRate&rdquo;, DataRateValue (DataRate (&ldquo;10Mb/s&rdquo;))); clientHelper3.SetAttribute (&ldquo;PacketSize&rdquo;, UintegerValue (1000));
 ApplicationContainer clientApps3; AddressValue remoteAddress3 (InetSocketAddress (i0i2.GetAddress (0), port3)); clientHelper3.SetAttribute (&ldquo;Remote&rdquo;, remoteAddress3); clientApps3.Add (clientHelper3.Install (n3n4.Get (1))); clientApps3.Start (Seconds (3.5)); clientApps3.Stop (Seconds (client_stop_time));
 // Connection #4 OnOffHelper clientHelper4 (&ldquo;ns3::TcpSocketFactory&rdquo;, Address ()); clientHelper4.SetAttribute (&ldquo;OnTime&rdquo;, StringValue (&ldquo;ns3::ConstantRandomVariable[Constant=1]&rdquo;)); clientHelper4.SetAttribute (&ldquo;OffTime&rdquo;, StringValue (&ldquo;ns3::ConstantRandomVariable[Constant=0]&rdquo;)); clientHelper4.SetAttribute (&ldquo;DataRate&rdquo;, DataRateValue (DataRate (&ldquo;40b/s&rdquo;))); clientHelper4.SetAttribute (&ldquo;PacketSize&rdquo;, UintegerValue (5 * 8)); // telnet
 ApplicationContainer clientApps4; AddressValue remoteAddress4 (InetSocketAddress (i1i2.GetAddress (0), port4)); clientHelper4.SetAttribute (&ldquo;Remote&rdquo;, remoteAddress4); clientApps4.Add (clientHelper4.Install (n3n5.Get (1))); clientApps4.Start (Seconds (1.0)); clientApps4.Stop (Seconds (client_stop_time)); }
 }
 int main (int argc, char *argv[]) { // LogComponentEnable (&ldquo;RedExamples&rdquo;, LOG_LEVEL_INFO); // LogComponentEnable (&ldquo;TcpNewReno&rdquo;, LOG_LEVEL_INFO); // LogComponentEnable (&ldquo;RedQueue&rdquo;, LOG_LEVEL_FUNCTION); LogComponentEnable (&ldquo;RedQueue&rdquo;, LOG_LEVEL_INFO);
 uint32_t redTest; std::string redLinkDataRate = &ldquo;1.5Mbps&rdquo;; std::string redLinkDelay = &ldquo;20ms&rdquo;; std::string pathOut;
 bool writeForPlot = false; bool writePcap = false; bool flowMonitor = false; bool printRedStats = true;
 global_start_time = 0.0; global_stop_time = 11;
 sink_start_time = global_start_time; sink_stop_time = global_stop_time + 3.0; client_start_time = sink_start_time + 0.2; client_stop_time = global_stop_time &ndash; 2.0;
 // Configuration and command line parameter parsing
 redTest = 1;
 // Will only save in the directory if enable opts below
 pathOut = &ldquo;.&rdquo;; // Current directory
 CommandLine cmd; cmd.AddValue (&ldquo;testNumber&rdquo;, &ldquo;Run test 1, 3, 4 or 5&rdquo;, redTest); cmd.AddValue (&ldquo;pathOut&rdquo;, &ldquo;Path to save results from &ndash;writeForPlot/&ndash;writePcap/&ndash;writeFlowMonitor&rdquo;, pathOut); cmd.AddValue (&ldquo;writeForPlot&rdquo;, &ldquo;&lt;0/1&gt; to write results for plot (gnuplot)&rdquo;, writeForPlot); cmd.AddValue (&ldquo;writePcap&rdquo;, &ldquo;&lt;0/1&gt; to write results in pcapfile&rdquo;, writePcap); cmd.AddValue (&ldquo;writeFlowMonitor&rdquo;, &ldquo;&lt;0/1&gt; to enable Flow Monitor and write their results&rdquo;, flowMonitor);
 cmd.Parse (argc, argv);
 if ( (redTest != 1) &amp;&amp; (redTest != 3) &amp;&amp; (redTest != 4) &amp;&amp; (redTest != 5) ) { NS_ABORT_MSG (&ldquo;Invalid test number. Supported tests are 1, 3, 4 or 5&rdquo;); }
 Always use the online HTML Editor to compose the content for your website easily.
 
 NS_LOG_INFO (&ldquo;Create nodes&rdquo;); NodeContainer c; c.Create (6); Names::Add ( &ldquo;N0&rdquo;, c.Get (0)); Names::Add ( &ldquo;N1&rdquo;, c.Get (1)); Names::Add ( &ldquo;N2&rdquo;, c.Get (2)); Names::Add ( &ldquo;N3&rdquo;, c.Get (3)); Names::Add ( &ldquo;N4&rdquo;, c.Get (4)); Names::Add ( &ldquo;N5&rdquo;, c.Get (5));
 n0n2 = NodeContainer (c.Get (0), c.Get (2)); n1n2 = NodeContainer (c.Get (1), c.Get (2)); n2n3 = NodeContainer (c.Get (2), c.Get (3)); n3n4 = NodeContainer (c.Get (3), c.Get (4)); n3n5 = NodeContainer (c.Get (3), c.Get (5));
 Config::SetDefault (&ldquo;ns3::TcpL4Protocol::SocketType&rdquo;, StringValue (&ldquo;ns3::TcpReno&rdquo;));
 // 42 = headers size
 Config::SetDefault (&ldquo;ns3::TcpSocket::SegmentSize&rdquo;, UintegerValue (1000 &ndash; 42)); Config::SetDefault (&ldquo;ns3::TcpSocket::DelAckCount&rdquo;, UintegerValue (1)); GlobalValue::Bind (&ldquo;ChecksumEnabled&rdquo;, BooleanValue (false));
 uint32_t meanPktSize = 500;
 // RED params
 NS_LOG_INFO (&ldquo;Set RED params&rdquo;); Config::SetDefault (&ldquo;ns3::RedQueue::Mode&rdquo;, StringValue (&ldquo;QUEUE_MODE_PACKETS&rdquo;)); Config::SetDefault (&ldquo;ns3::RedQueue::MeanPktSize&rdquo;, UintegerValue (meanPktSize)); Config::SetDefault (&ldquo;ns3::RedQueue::Wait&rdquo;, BooleanValue (true)); Config::SetDefault (&ldquo;ns3::RedQueue::Gentle&rdquo;, BooleanValue (true)); Config::SetDefault (&ldquo;ns3::RedQueue::QW&rdquo;, DoubleValue (0.002)); Config::SetDefault (&ldquo;ns3::RedQueue::MinTh&rdquo;, DoubleValue (5)); Config::SetDefault (&ldquo;ns3::RedQueue::MaxTh&rdquo;, DoubleValue (15)); Config::SetDefault (&ldquo;ns3::RedQueue::QueueLimit&rdquo;, UintegerValue (25));
 if (redTest == 3) // test like 1, but with bad params { Config::SetDefault (&ldquo;ns3::RedQueue::MaxTh&rdquo;, DoubleValue (10)); Config::SetDefault (&ldquo;ns3::RedQueue::QW&rdquo;, DoubleValue (0.003)); } else if (redTest == 5) // test 5, same of test 4, but in byte mode { Config::SetDefault (&ldquo;ns3::RedQueue::Mode&rdquo;, StringValue (&ldquo;QUEUE_MODE_BYTES&rdquo;)); Config::SetDefault (&ldquo;ns3::RedQueue::Ns1Compat&rdquo;, BooleanValue (true)); Config::SetDefault (&ldquo;ns3::RedQueue::MinTh&rdquo;, DoubleValue (5 * meanPktSize)); Config::SetDefault (&ldquo;ns3::RedQueue::MaxTh&rdquo;, DoubleValue (15 * meanPktSize)); Config::SetDefault (&ldquo;ns3::RedQueue::QueueLimit&rdquo;, UintegerValue (25 * meanPktSize)); }
 NS_LOG_INFO (&ldquo;Install internet stack on all nodes.&rdquo;);
 InternetStackHelper internet; internet.Install (c);
 NS_LOG_INFO (&ldquo;Create channels&rdquo;); PointToPointHelper p2p;
 p2p.SetQueue (&ldquo;ns3::DropTailQueue&rdquo;); p2p.SetDeviceAttribute (&ldquo;DataRate&rdquo;, StringValue (&ldquo;10Mbps&rdquo;)); p2p.SetChannelAttribute (&ldquo;Delay&rdquo;, StringValue (&ldquo;2ms&rdquo;)); NetDeviceContainer devn0n2 = p2p.Install (n0n2);
 p2p.SetQueue (&ldquo;ns3::DropTailQueue&rdquo;); p2p.SetDeviceAttribute (&ldquo;DataRate&rdquo;, StringValue (&ldquo;10Mbps&rdquo;)); p2p.SetChannelAttribute (&ldquo;Delay&rdquo;, StringValue (&ldquo;3ms&rdquo;)); NetDeviceContainer devn1n2 = p2p.Install (n1n2);
 p2p.SetQueue (&ldquo;ns3::RedQueue&rdquo;, // only backbone link has RED queue &ldquo;LinkBandwidth&rdquo;, StringValue (redLinkDataRate), &ldquo;LinkDelay&rdquo;, StringValue (redLinkDelay)); p2p.SetDeviceAttribute (&ldquo;DataRate&rdquo;, StringValue (redLinkDataRate)); p2p.SetChannelAttribute (&ldquo;Delay&rdquo;, StringValue (redLinkDelay)); NetDeviceContainer devn2n3 = p2p.Install (n2n3);
 p2p.SetQueue (&ldquo;ns3::DropTailQueue&rdquo;); p2p.SetDeviceAttribute (&ldquo;DataRate&rdquo;, StringValue (&ldquo;10Mbps&rdquo;)); p2p.SetChannelAttribute (&ldquo;Delay&rdquo;, StringValue (&ldquo;4ms&rdquo;)); NetDeviceContainer devn3n4 = p2p.Install (n3n4);
 p2p.SetQueue (&ldquo;ns3::DropTailQueue&rdquo;); p2p.SetDeviceAttribute (&ldquo;DataRate&rdquo;, StringValue (&ldquo;10Mbps&rdquo;)); p2p.SetChannelAttribute (&ldquo;Delay&rdquo;, StringValue (&ldquo;5ms&rdquo;)); NetDeviceContainer devn3n5 = p2p.Install (n3n5);
 NS_LOG_INFO (&ldquo;Assign IP Addresses&rdquo;); Ipv4AddressHelper ipv4;
 ipv4.SetBase (&ldquo;10.1.1.0&rdquo;, &ldquo;255.255.255.0&rdquo;); i0i2 = ipv4.Assign (devn0n2);
 ipv4.SetBase (&ldquo;10.1.2.0&rdquo;, &ldquo;255.255.255.0&rdquo;); i1i2 = ipv4.Assign (devn1n2);
 ipv4.SetBase (&ldquo;10.1.3.0&rdquo;, &ldquo;255.255.255.0&rdquo;); i2i3 = ipv4.Assign (devn2n3);
 ipv4.SetBase (&ldquo;10.1.4.0&rdquo;, &ldquo;255.255.255.0&rdquo;); i3i4 = ipv4.Assign (devn3n4);
 ipv4.SetBase (&ldquo;10.1.5.0&rdquo;, &ldquo;255.255.255.0&rdquo;); i3i5 = ipv4.Assign (devn3n5);
 // Set up the routing
 Ipv4GlobalRoutingHelper::PopulateRoutingTables ();
 if (redTest == 5) { // like in ns2 test, r2 -&gt; r1, have a queue in packet mode Ptr&lt;PointToPointNetDevice&gt; nd = StaticCast&lt;PointToPointNetDevice&gt; (devn2n3.Get (1)); Ptr&lt;Queue&gt; queue = nd-&gt;GetQueue ();
 StaticCast&lt;RedQueue&gt; (queue)-&gt;SetMode (RedQueue::QUEUE_MODE_PACKETS); StaticCast&lt;RedQueue&gt; (queue)-&gt;SetTh (5, 15); StaticCast&lt;RedQueue&gt; (queue)-&gt;SetQueueLimit (25); }
 BuildAppsTest (redTest);
 if (writePcap) { PointToPointHelper ptp; std::stringstream stmp; stmp &lt;&lt; pathOut &lt;&lt; &ldquo;/red&rdquo;; ptp.EnablePcapAll (stmp.str ().c_str ()); }
 Ptr&lt;FlowMonitor&gt; flowmon; if (flowMonitor) { FlowMonitorHelper flowmonHelper; flowmon = flowmonHelper.InstallAll (); }
 if (writeForPlot) { filePlotQueue &lt;&lt; pathOut &lt;&lt; &ldquo;/&rdquo; &lt;&lt; &ldquo;red-queue.plotme&rdquo;; filePlotQueueAvg &lt;&lt; pathOut &lt;&lt; &ldquo;/&rdquo; &lt;&lt; &ldquo;red-queue_avg.plotme&rdquo;;
 remove (filePlotQueue.str ().c_str ()); remove (filePlotQueueAvg.str ().c_str ()); Ptr&lt;PointToPointNetDevice&gt; nd = StaticCast&lt;PointToPointNetDevice&gt; (devn2n3.Get (0)); Ptr&lt;Queue&gt; queue = nd-&gt;GetQueue (); Simulator::ScheduleNow (&amp;CheckQueueSize, queue); }
 Simulator::Stop (Seconds (sink_stop_time)); Simulator::Run ();
 if (flowMonitor) { std::stringstream stmp; stmp &lt;&lt; pathOut &lt;&lt; &ldquo;/red.flowmon&rdquo;;
 flowmon-&gt;SerializeToXmlFile (stmp.str ().c_str (), false, false); }
 if (printRedStats) { Ptr&lt;PointToPointNetDevice&gt; nd = StaticCast&lt;PointToPointNetDevice&gt; (devn2n3.Get (0)); RedQueue::Stats st = StaticCast&lt;RedQueue&gt; (nd-&gt;GetQueue ())-&gt;GetStats (); std::cout &lt;&lt; &ldquo;*** RED stats from Node 2 queue ***&rdquo; &lt;&lt; std::endl; std::cout &lt;&lt; &ldquo;t &rdquo; &lt;&lt; st.unforcedDrop &lt;&lt; &rdquo; drops due prob mark&rdquo; &lt;&lt; std::endl; std::cout &lt;&lt; &ldquo;t &rdquo; &lt;&lt; st.forcedDrop &lt;&lt; &rdquo; drops due hard mark&rdquo; &lt;&lt; std::endl; std::cout &lt;&lt; &ldquo;t &rdquo; &lt;&lt; st.qLimDrop &lt;&lt; &rdquo; drops due queue full&rdquo; &lt;&lt; std::endl;
 nd = StaticCast&lt;PointToPointNetDevice&gt; (devn2n3.Get (1)); st = StaticCast&lt;RedQueue&gt; (nd-&gt;GetQueue ())-&gt;GetStats (); std::cout &lt;&lt; &ldquo;*** RED stats from Node 3 queue ***&rdquo; &lt;&lt; std::endl; std::cout &lt;&lt; &ldquo;t &rdquo; &lt;&lt; st.unforcedDrop &lt;&lt; &rdquo; drops due prob mark&rdquo; &lt;&lt; std::endl; std::cout &lt;&lt; &ldquo;t &rdquo; &lt;&lt; st.forcedDrop &lt;&lt; &rdquo; drops due hard mark&rdquo; &lt;&lt; std::endl; std::cout &lt;&lt; &ldquo;t &rdquo; &lt;&lt; st.qLimDrop &lt;&lt; &rdquo; drops due queue full&rdquo; &lt;&lt; std::endl; }
 Simulator::Destroy ();
 return 0; } 
</code>
</pre>

<p>Kode 3.2 Program red_tests.cc</p>

<h2>BAB IV PEMBAHASAN </h2>

<h3>4.1 Simulasi perbandingan Droptail dan RED</h3>

<p>Terlihat pada gambar 4.1 dan gambar 4.2 bekerja menurut Stallings, 1998, yaitu pada droptail simpul akan menunggu sampai kapasitas antrean penuh baru melakukan pembuangan, sehingga terlihat terjadi penurunan kecepatan yang besar yaitu sekitar 300 Kbps pada saat penuh.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/0dc6ed8a-8117-472a-940f-6de713a46dc9-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.1 Simulasi Droptail</figcaption>
</figure>


<p>
Sedangkan pada RED terjadi usaha pencegahan agar kapasitas tidak penuh sehingga telah terjadi pembuangan sebelum kapasitas penuh. Pembuangan paket terjadi berdasarkan potensi terjadinya kelebihan kapasitas. Sehingga terlihat penurun kecepatan bertahap tetapi tidak sebesar pada Droptail yaitu sekitar 50 Kbps.
</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/fcdb232d-e97a-445d-81f1-50ce35ea6751-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.2 Simulasi RED</figcaption>
</figure>

<h3>4.2 Simulasi RED pada topologi sederhana</h3>

<p>Pertama terjadi inisialisasi yaitu penyesuaian dengan penurunnan kecepat yang sangat besar yaitu sekitar 1000 Kbps.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/b4ef74dc-838e-4e7d-b76f-3672f33f5e8d-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.3 Simulasi RED detil 1</figcaption>
</figure>

<p>Setelah itu terlihat pada gambar 4.4 simpul berusaha agar kapasitas tidak melebihi 25000 paket dengan melakukan penurunan speed secara bertahap.</p>

<p>Pada gambar setelah gambar 4.4 simpul melakukan penurunan speed secara bertahap ditinjau dari potensi terjadi kapasitas penuh. Menurut Stallings, 1998, kerja REDQueue adalah paket akan antre bila kapasitas antrean rata-rata tidak melebihi batasan minimal yang ditentukan oleh RED. Bila kapasitas antrean rata-rata diatara batas minimal dan batas maksimal maka pembuangan terjadi berdasarkan probabilatas akan terjadinya kapasitas penuh. Bila kapasitas antrean rata-rata melembih batas maksimal maka akan terjadi pembuangan paket.</p><br />

<p>Terlihat pada hasil berikutnya sesuai dengan teori.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/4667ffb8-e35a-4267-890f-f7fe91504154-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.4 Simulasi RED detil 2</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/1f522c91-9639-4558-9545-a7e94e66c057-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.5 Simulasi RED detil 3</figcaption>
</figure>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/26993eed-20d3-4a18-987b-525d5b4c688b-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.6 Simulasi RED detil 4</figcaption>
</figure>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/a736f775-afb0-4948-af60-89b1209cadcd-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.7 Simulasi RED detil 5</figcaption>
</figure>

<h2>BAB V PENUTUP </h3>
 
<h2>DAFTAR PUSTAKA</h3>

<ul>
<li>Ns3-project. 2012. http://www.nsnam.org. diakses 27 Mei 2013.</li>
<li>Stallings, W. 1998. High-Speed Networks. Prentice-Hall,inc : New Jersey.</li>
</ul>
`
);
});
