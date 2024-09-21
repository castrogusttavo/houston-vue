
<template>
  <Icon :iconName="'dressing-table-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DressingTable03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dressing-table-03'
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
