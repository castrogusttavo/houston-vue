
<template>
  <Icon :iconName="'liver'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LiverIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'liver'
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
