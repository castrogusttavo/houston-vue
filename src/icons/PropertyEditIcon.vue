
<template>
  <Icon :iconName="'property-edit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PropertyEditIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'property-edit'
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
