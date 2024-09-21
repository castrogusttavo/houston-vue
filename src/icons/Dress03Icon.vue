
<template>
  <Icon :iconName="'dress-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Dress03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dress-03'
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
