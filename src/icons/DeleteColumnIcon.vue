
<template>
  <Icon :iconName="'delete-column'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeleteColumnIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delete-column'
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
