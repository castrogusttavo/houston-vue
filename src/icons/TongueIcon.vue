
<template>
  <Icon :iconName="'tongue'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TongueIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tongue'
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
