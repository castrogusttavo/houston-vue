
<template>
  <Icon :iconName="'niqab'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NiqabIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'niqab'
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
