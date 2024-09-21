
<template>
  <Icon :iconName="'smart-phone-landscape'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SmartPhoneLandscapeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'smart-phone-landscape'
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
