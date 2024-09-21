
<template>
  <Icon :iconName="'maximize-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Maximize03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maximize-03'
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
