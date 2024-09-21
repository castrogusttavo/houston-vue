
<template>
  <Icon :iconName="'golf-hole'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GolfHoleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'golf-hole'
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
