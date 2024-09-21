
<template>
  <Icon :iconName="'property-delete'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PropertyDeleteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'property-delete'
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
