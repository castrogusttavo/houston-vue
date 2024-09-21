
<template>
  <Icon :iconName="'table-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Table03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'table-03'
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
