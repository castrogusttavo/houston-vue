
<template>
  <Icon :iconName="'yurt'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'YurtIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'yurt'
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
