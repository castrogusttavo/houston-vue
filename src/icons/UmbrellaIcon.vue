
<template>
  <Icon :iconName="'umbrella'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UmbrellaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'umbrella'
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
