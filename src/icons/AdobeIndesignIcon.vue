
<template>
  <Icon :iconName="'adobe-indesign'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AdobeIndesignIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'adobe-indesign'
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
