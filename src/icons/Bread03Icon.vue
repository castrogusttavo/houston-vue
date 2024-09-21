
<template>
  <Icon :iconName="'bread-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bread03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bread-03'
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
