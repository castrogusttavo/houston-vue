
<template>
  <Icon :iconName="'delete-put-back'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeletePutBackIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delete-put-back'
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
