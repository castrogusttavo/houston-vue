
<template>
  <Icon :iconName="'xsl-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Xsl02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'xsl-02'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
