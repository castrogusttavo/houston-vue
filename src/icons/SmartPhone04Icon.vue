
<template>
  <Icon :iconName="'smart-phone-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SmartPhone04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'smart-phone-04'
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
