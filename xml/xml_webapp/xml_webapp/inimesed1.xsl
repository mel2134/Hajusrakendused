<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output encoding="UTF-8" method="text" />
    <xsl:template match="/">
		Kolm esimest: <xsl:value-of select="/inimesed/inimene[1]/eesnimi"/> ; 
		<xsl:value-of select="/inimesed/inimene[2]/eesnimi"/> ;  
		<xsl:value-of select="/inimesed/inimene[3]/eesnimi"/> ;
	</xsl:template>
</xsl:stylesheet>