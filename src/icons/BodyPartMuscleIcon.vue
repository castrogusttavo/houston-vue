
<template>
  <Icon :iconName="'body-part-muscle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BodyPartMuscleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'body-part-muscle'
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
