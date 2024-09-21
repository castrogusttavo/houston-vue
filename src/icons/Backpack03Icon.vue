
<template>
  <Icon :iconName="'backpack-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Backpack03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'backpack-03'
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
