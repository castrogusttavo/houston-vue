
<template>
  <Icon :iconName="'boat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BoatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'boat'
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
