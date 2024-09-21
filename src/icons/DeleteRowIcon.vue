
<template>
  <Icon :iconName="'delete-row'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeleteRowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delete-row'
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
