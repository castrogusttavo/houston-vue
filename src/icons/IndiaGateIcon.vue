
<template>
  <Icon :iconName="'india-gate'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IndiaGateIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'india-gate'
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
