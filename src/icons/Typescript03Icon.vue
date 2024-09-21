
<template>
  <Icon :iconName="'typescript-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Typescript03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'typescript-03'
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
