
<template>
  <Icon :iconName="'call-missed-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallMissed01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-missed-01'
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
