
<template>
  <Icon :iconName="'java-script'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'JavaScriptIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'java-script'
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
