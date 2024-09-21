
<template>
  <Icon :iconName="'grimacing'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GrimacingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'grimacing'
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
