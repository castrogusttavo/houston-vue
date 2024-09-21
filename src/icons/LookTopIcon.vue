
<template>
  <Icon :iconName="'look-top'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LookTopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'look-top'
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
