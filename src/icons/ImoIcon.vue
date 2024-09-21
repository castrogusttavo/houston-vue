
<template>
  <Icon :iconName="'imo'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'imo'
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
