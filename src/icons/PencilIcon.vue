
<template>
  <Icon :iconName="'pencil'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PencilIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pencil'
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
