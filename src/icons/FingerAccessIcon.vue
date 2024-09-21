
<template>
  <Icon :iconName="'finger-access'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FingerAccessIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'finger-access'
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
