
<template>
  <Icon :iconName="'smart-phone-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SmartPhone03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'smart-phone-03'
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
