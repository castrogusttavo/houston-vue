
<template>
  <Icon :iconName="'call-locked'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallLockedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-locked'
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
