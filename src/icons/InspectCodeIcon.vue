
<template>
  <Icon :iconName="'inspect-code'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InspectCodeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'inspect-code'
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
