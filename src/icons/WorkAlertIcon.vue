
<template>
  <Icon :iconName="'work-alert'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkAlertIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'work-alert'
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
