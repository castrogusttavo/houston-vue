
<template>
  <Icon :iconName="'black-hole'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BlackHoleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'black-hole'
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
