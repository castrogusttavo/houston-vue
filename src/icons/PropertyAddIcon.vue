
<template>
  <Icon :iconName="'property-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PropertyAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'property-add'
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
