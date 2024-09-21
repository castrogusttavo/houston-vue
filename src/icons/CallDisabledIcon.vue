
<template>
  <Icon :iconName="'call-disabled'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallDisabledIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-disabled'
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
