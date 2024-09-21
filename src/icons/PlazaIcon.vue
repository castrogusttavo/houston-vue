
<template>
  <Icon :iconName="'plaza'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlazaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plaza'
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
