
<template>
  <Icon :iconName="'call-missed-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallMissed03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-missed-03'
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
